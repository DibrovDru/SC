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
@Table(name="Folders")
public class FolderEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    Long id;

    @Column(name = "name")
    @NotNull
    public String name;

    @Column(name = "host_id")
    @NotNull
    public Long hostId;
}
