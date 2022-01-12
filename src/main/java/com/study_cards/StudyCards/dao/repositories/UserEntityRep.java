package com.study_cards.StudyCards.dao.repositories;

import com.study_cards.StudyCards.dao.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserEntityRep extends JpaRepository<UserEntity, Long> {
    public UserEntity findByEmail(String email);
    public List<UserEntity> findAll();
}
