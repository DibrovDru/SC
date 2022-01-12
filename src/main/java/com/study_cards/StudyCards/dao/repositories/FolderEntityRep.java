package com.study_cards.StudyCards.dao.repositories;

import com.study_cards.StudyCards.dao.entities.FolderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FolderEntityRep extends JpaRepository<FolderEntity, Long> {
    public List<FolderEntity> findAllByHostId(Long id);
}
