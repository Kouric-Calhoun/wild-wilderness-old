package com.wildernesswild.wildernesswild.repositories;

import com.wildernesswild.wildernesswild.models.Skills;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SkillsRepository extends CrudRepository<Skills, Long> {
    Optional<Skills> findById(Long id);
}
