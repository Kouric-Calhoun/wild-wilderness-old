package com.wildernesswild.wildernesswild.rest.controllers;

import com.wildernesswild.wildernesswild.models.Regions;
import com.wildernesswild.wildernesswild.repositories.RegionsRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
public class RegionsRestController {

    @Resource
    private RegionsRepository regionsRepo;

//    @GetMapping("/api/regions")
//    public Collection<Regions> getRegions() {
//        return (Collection<Regions>) regionsRepo.findAll(); }
//
//    @GetMapping("/api/regions/{id}")
//    public Optional<Regions> getRegions(@PathVariable Long id) {
//        return regionsRepo.findById(id); }

}
