package com.example.cliente_crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cliente_crud.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
