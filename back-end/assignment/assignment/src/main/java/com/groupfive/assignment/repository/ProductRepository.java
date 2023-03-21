package com.groupfive.assignment.repository;

import com.groupfive.assignment.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
