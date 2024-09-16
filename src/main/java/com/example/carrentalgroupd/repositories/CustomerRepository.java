package com.example.carrentalgroupd.repositories;


import com.example.carrentalgroupd.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
