package com.wildernesswild.wildernesswild.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Scenarios {

    @Id
    @GeneratedValue
    private Long id;
    @Lob
    private String description;
    private String image;
    private String name;
    @ManyToOne
    @JsonIgnore
    private Collection<Regions> regions;

    public Long getId() {
        return id;
    }
    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public String getName() {
        return name;
    }

    public Collection<Regions> getRegions() {
        return regions;
    }
    public Scenarios () {
    }

    public Scenarios(String description, String image, String name, Regions...regions) {
        this.description = description;
        this.image = image;
        this.name = name;
        this.regions = new ArrayList<>(Arrays.asList(regions));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Scenarios)) return false;
        Scenarios scenarios = (Scenarios) o;
        return Objects.equals(getId(), scenarios.getId()) && Objects.equals(getDescription(), scenarios.getDescription()) && Objects.equals(getImage(), scenarios.getImage()) && Objects.equals(getName(), scenarios.getName()) && Objects.equals(getRegions(), scenarios.getRegions());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getDescription(), getImage(), getName(), getRegions());
    }
}
