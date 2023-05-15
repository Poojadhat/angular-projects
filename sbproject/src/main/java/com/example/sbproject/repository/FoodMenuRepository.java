package com.example.sbproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.sbproject.model.MenuModel;

public interface FoodMenuRepository extends JpaRepository <MenuModel,Integer>{
    
}