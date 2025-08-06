package com.example.cliente_crud.service;

import com.example.cliente_crud.model.Cliente;
import com.example.cliente_crud.repository.ClienteRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;


@Service
public class ClienteService {

    private final ClienteRepository repository;

    public ClienteService(ClienteRepository repository) {
        this.repository = repository;
    }

    public List<Cliente> listarTodos() {
        return repository.findAll();
    }

    public Optional<Cliente> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Cliente salvar(Cliente cliente) {
        return repository.save(cliente);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
