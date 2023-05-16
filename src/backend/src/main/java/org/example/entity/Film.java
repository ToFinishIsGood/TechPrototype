package org.example.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "film",schema = "filmticket")
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", length = 128, nullable = false)
    private String name;

    @Column(name = "description", length = 2048)
    private String description;

    @Column(name = "image", length = 16384)
    private String image;

    @Column(name = "price", length = 8, nullable = false)
    private Double price;

    @Column(name = "release_date", length = 64, nullable = false)
    private String releaseDate;

    @OneToOne(mappedBy = "film",cascade = CascadeType.ALL)
    @JsonIgnore
    private Screening screening;
}
