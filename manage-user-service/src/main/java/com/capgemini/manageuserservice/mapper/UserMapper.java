package com.capgemini.manageuserservice.mapper;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.capgemini.manageuserservice.entity.User;
import com.capgemini.manageuserservice.model.UserModel;

@Component
public class UserMapper {
	
public User mapDtoToEntity ( UserModel user ) {
		
		User userEntity = new User();
		userEntity.setEmail(user.getEmail());
		userEntity.setName(user.getName());
		userEntity.setPassword(user.getPassword());
		userEntity.setRole(user.getRole());
		return userEntity;
	}
public UserModel mapEntityToDto (User user){
	
	UserModel userModel = new UserModel();
	BeanUtils.copyProperties(user, userModel);
	return userModel;
	
}

}
