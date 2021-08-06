package com.wildernesswild.wildernesswild.models;

import javax.persistence.*;
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

    @OneToMany(mappedBy = "regions")
    private Collection<Skills> skills;

    public Regions () {
    }

    public Regions(String apiLink, String name, String climate, String description, String image, String location, String terrain) {
        this.apiLink = apiLink;
        this.name = name;
        this.climate = climate;
        this.description = description;
        this.image = image;
        this.location = location;
        this.terrain = terrain;
    }

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

    public Collection<Skills> getSkills(){
        return skills;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Regions regions = (Regions) o;
        return Objects.equals(id, regions.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
