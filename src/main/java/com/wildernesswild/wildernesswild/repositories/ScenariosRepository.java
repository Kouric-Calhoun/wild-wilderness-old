package com.wildernesswild.wildernesswild.repositories;

import com.wildernesswild.wildernesswild.models.Scenarios;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ScenariosRepository extends CrudRepository<Scenarios, Long> {
    Optional<Scenarios> findById(Long id);
}
