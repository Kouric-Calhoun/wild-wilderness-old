package com.wildernesswild.wildernesswild.repositories;

import org.springframework.data.repository.CrudRepository;
import com.wildernesswild.wildernesswild.models.Regions;

import java.util.Optional;


public interface RegionsRepository extends CrudRepository <Regions, Long> {
    Optional<Regions> findById(Long id);
}
