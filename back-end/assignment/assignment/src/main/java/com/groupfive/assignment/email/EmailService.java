package com.groupfive.assignment.email;

import com.groupfive.assignment.model.User;
import com.groupfive.assignment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class EmailService {


    @Autowired
    private UserRepository userRepo;

    @Autowired
    private JavaMailSender javaMailSender;

    public String generateOtp() {
        Random random = new Random();
        int otpValue = 100000 + random.nextInt(900000);
        return String.valueOf(otpValue);
    }

    public void sendOtpEmail(String email, String otp) {
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

}
