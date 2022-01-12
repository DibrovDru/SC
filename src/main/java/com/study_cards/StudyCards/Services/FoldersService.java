package com.study_cards.StudyCards.Services;

import com.study_cards.StudyCards.dao.entities.FolderEntity;
import com.study_cards.StudyCards.dao.repositories.FolderEntityRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoldersService {

    @Autowired
    FolderEntityRep folderEntityRep;

    public String getAll(Long id) {
        return folderEntityRep.findAllByHostId(id).toString();
    }

    public String create(Long id, String name) {
        FolderEntity folderEntity = FolderEntity.builder()
                .hostId(id)
                .name(name)
                .build();

        folderEntityRep.save(folderEntity);
        return getAll(id);
    }
}
