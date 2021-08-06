package com.wildernesswild.wildernesswild;

import com.wildernesswild.wildernesswild.models.Regions;
import com.wildernesswild.wildernesswild.models.Skills;
import com.wildernesswild.wildernesswild.repositories.RegionsRepository;
import com.wildernesswild.wildernesswild.repositories.SkillsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private RegionsRepository regionsRepo;

    @Resource
    private SkillsRepository skillsRepo;

    @Override
    public void run(String... args) throws Exception {

        Regions northEast = new Regions("https://test.com", "North East", "Warm", "NorthEast", "Pic", "east of Ohio Valley",
                "normal");
        Regions southEast = new Regions("https://test.com", "North East", "Warm", "SouthEast", "Pic", "east of Ohio Valley",
                "normal");
        Regions West = new Regions("https://test.com", "North East", "Warm", "West", "Pic", "east of Ohio Valley",
                "normal");
        Regions southWest = new Regions("https://test.com", "North East", "Warm", "SouthWest", "Pic", "east of Ohio Valley",
                "normal");
        Regions midWest = new Regions("https://test.com", "North East", "Warm", "MidWest", "Pic", "east of Ohio Valley",
                "normal");
        regionsRepo.save(northEast);
        regionsRepo.save(southEast);
        regionsRepo.save(West);
        regionsRepo.save(southWest);
        regionsRepo.save(midWest);

        Skills startFire = new Skills("Start a Fire", "How to make a fire", "Sticks", "pic", northEast);
        Skills procureWater = new Skills("Start procure Water", "How to procure water", "moving water", "pic", midWest);
        skillsRepo.save(startFire);
        skillsRepo.save(procureWater);


    }
}
