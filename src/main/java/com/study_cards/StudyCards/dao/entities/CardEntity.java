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
@Table(name="Word")
public class CardEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Long id;

    @Column(name = "name")
    @NotNull
    public String name;

    @Column(name = "folder_id")
    @NotNull
    public Long folderId;

    @Column(name = "definition")
    @NotNull
    public String definition;
}
