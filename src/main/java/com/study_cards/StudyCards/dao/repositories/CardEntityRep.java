package com.study_cards.StudyCards.dao.repositories;

import com.study_cards.StudyCards.dao.entities.CardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardEntityRep extends JpaRepository<CardEntity, Long> {
    public List<CardEntity> findAllByFolderId(Long id);
}
