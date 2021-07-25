package com.wildernesswild.wildernesswild.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Skills {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Lob
    private String description;
    private String gear;
    private String image;
    private Collection<Regions> regions;

    public Skills () {
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getGear() {
        return gear;
    }

    public String getImage() {
        return image;
    }

    public Collection<Regions> getRegions() {
        return regions;
    }

    public Skills(String name, String description, String gear, String image, Collection<Regions> regions) {
        this.name = name;
        this.description = description;
        this.gear = gear;
        this.image = image;
        this.regions = regions;
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

