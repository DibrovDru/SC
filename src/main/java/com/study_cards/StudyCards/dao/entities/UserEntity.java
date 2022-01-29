package com.study_cards.StudyCards.dao.entities;


import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table(name="Users")
public class UserEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Long id;

    @Column(name = "email")
    @NotNull
    public String email;

    @Column(name = "password")
    @NotNull
    public String password;
}
