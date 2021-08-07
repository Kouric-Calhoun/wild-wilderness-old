package com.wildernesswild.wildernesswild.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Skills {

    @Id
    @GeneratedValue
    private Long id;

    private String skillName;
    @Lob
    private String description;
    private String image;

    @ManyToOne
    @JsonIgnore
    private Regions regions;


    public Skills(String skillName, String description,  String image, Regions regions) {
        this.skillName = skillName;
        this.description = description;
        this.image = image;
        this.regions = regions;
    }

    public String getSkillName() {
        return skillName;
    }

    public String getDescription() {
        return description;
    }


    public String getImage() {
        return image;
    }

    public Regions getRegions() {
        return regions;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Skills)) return false;
        Skills skills = (Skills) o;
        return Objects.equals(id, skills.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

