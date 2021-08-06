package com.wildernesswild.wildernesswild.rest.controllers;


import com.wildernesswild.wildernesswild.models.Skills;
import com.wildernesswild.wildernesswild.repositories.SkillsRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
public class SkillsRestController {

    @Resource
    private SkillsRepository skillsRepo;

//    @GetMapping("/api/skills")
//    public Collection<Skills> getSkills() {
//        return (Collection<Skills>) skillsRepo.findAll(); }
//
//    @GetMapping("/api/skills/{id}")
//    public Skills getSkills(@PathVariable Long id) {
//        return skillsRepo.findById(id).get(); }
}
