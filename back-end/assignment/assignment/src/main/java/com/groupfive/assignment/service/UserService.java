package com.groupfive.assignment.service;


import com.groupfive.assignment.dto.LoginRequest;
import com.groupfive.assignment.model.User;
import com.groupfive.assignment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private JavaMailSender javaMailSender;
//    LoginRequest loginRequest;
    BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();

    public List<User> getAllUser(){
        return userRepo.findAll();
    }
    public User addUser(User user) {

        String encryptedPassword=passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);
        return userRepo.save(user);
    }
    public User register(User user) {
        String encryptedPassword=passwordEncoder.encode(user.getPassword());
        // Generate OTP
        String otp = generateOtp();
        user.setOtp(otp);
        user.setStatus(false);
        user.setPassword(encryptedPassword);

        // Save user
        User savedUser = userRepo.save(user);

        // Send OTP email
        sendOtpEmail(user.getEmail(), otp);

        return savedUser;
    }

    private String generateOtp() {
        Random random = new Random();
        int otpValue = 100000 + random.nextInt(900000);
        return String.valueOf(otpValue);
    }

    private void sendOtpEmail(String email, String otp) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email);
        msg.setSubject("OTP for registration");
        msg.setText("Your OTP is: " + otp);

        javaMailSender.send(msg);
    }

    public boolean verifyOtp(String email, String otp) {
        User user = userRepo.findByEmail(email);
        if (user == null) {
            return false;
        }

        if (user.getOtp().equals(otp)) {
            user.setStatus(true);
            userRepo.save(user);
            return true;
        }

        return false;
    }

    public boolean isUserAlreadyExists(User user) {
        User existingUser = userRepo.findByEmail(user.getEmail());
        if(existingUser==null){
            return false;
        }else{
            return true;
        }
    }
    public boolean authenticate(@RequestBody LoginRequest loginRequest) {
        User user = userRepo.findByEmail(loginRequest.getEmail());
        if (user != null && passwordEncoder.matches(loginRequest.getPassword(),user.getPassword())) {
            return true;
        }
        return false;
    }
    public void deleteUserById(Long id) {
        userRepo.deleteById(id);
    }
}

