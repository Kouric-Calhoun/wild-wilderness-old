package com.wildernesswild.wildernesswild.rest.controllers;

import com.wildernesswild.wildernesswild.models.Scenarios;
import com.wildernesswild.wildernesswild.repositories.ScenariosRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
public class ScenariosRestController {

    @Resource
    private ScenariosRepository scenariosRepo;

    @GetMapping("/api/scenarios")
    public Collection<Scenarios> getHistory() {

        return (Collection<Scenarios>) scenariosRepo.findAll();
    }

    @GetMapping("/api/scenarios/{id}")
    public Scenarios getScenarios(@PathVariable Long id) {

        return scenariosRepo.findById(id).get();
    }
}
