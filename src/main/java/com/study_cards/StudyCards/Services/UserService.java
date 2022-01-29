package com.study_cards.StudyCards.Services;

import com.study_cards.StudyCards.dao.entities.UserEntity;
import com.study_cards.StudyCards.dao.repositories.UserEntityRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    UserEntityRep userEntityRep;

    public String create(String email, String password) {
        UserEntity newUser = UserEntity.builder()
                .email(email)
                .password(password)
                .build();

        UserEntity find = userEntityRep.findByEmail(email);

                if (find == null) {
            userEntityRep.save(newUser);
            return "OK";
        }

        return "NO";
    }

    public String LogIn(String email, String password) {
        UserEntity find = userEntityRep.findByEmail(email);

        return (find != null && find.password.equals(password) ? "OK" : "NO");
    }

    public String getAll() {
        return userEntityRep.findAll().toString();
    }
}
