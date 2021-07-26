package com.wildernesswild.wildernesswild.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Regions {

    @Id
    @GeneratedValue
    private Long id;
    private String apiLink;
    private String name;
    private String climate;
    @Lob
    private String description;
    private String image;
    private String location;
    private String terrain;
    @ManyToMany
    private Collection<Scenarios> scenarios;
    @ManyToMany
    private Collection<Skills> skills;

    public Long getId() {
        return id;
    }
    public String getApiLink() {
        return apiLink;
    }

    public String getClimate() {
        return climate;
    }
    public String getName() {
        return name;
    }
    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public String getLocation() {
        return location;
    }

    public String getTerrain() {
        return terrain;
    }

    public Collection<Scenarios> getScenarios() {return scenarios;}

    public Collection <Skills> getSkills() {return skills;}

    public Regions () {
    }

    public Regions(String apiLink, String name, String climate, String description, String image, String location, String terrain, Scenarios scenarios, Skills skills) {
        this.apiLink = apiLink;
        this.name = name;
        this.climate = climate;
        this.description = description;
        this.image = image;
        this.location = location;
        this.terrain = terrain;
        this.scenarios = new ArrayList<>(Arrays.asList(scenarios));
        this.skills = new ArrayList<>(Arrays.asList(skills));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Regions)) return false;
        Regions regions = (Regions) o;
        return Objects.equals(getId(), regions.getId()) && Objects.equals(getApiLink(), regions.getApiLink()) && Objects.equals(getName(), regions.getName()) && Objects.equals(getClimate(), regions.getClimate()) && Objects.equals(getDescription(), regions.getDescription()) && Objects.equals(getImage(), regions.getImage()) && Objects.equals(getLocation(), regions.getLocation()) && Objects.equals(getTerrain(), regions.getTerrain()) && Objects.equals(getScenarios(), regions.getScenarios()) && Objects.equals(getSkills(), regions.getSkills());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getApiLink(), getName(), getClimate(), getDescription(), getImage(), getLocation(), getTerrain(), getScenarios(), getSkills());
    }
}
