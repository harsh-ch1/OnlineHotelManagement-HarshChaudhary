package com.capgemini.manageuserservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capgemini.manageuserservice.entity.User;
import com.capgemini.manageuserservice.mapper.UserMapper;
import com.capgemini.manageuserservice.model.UserModel;
import com.capgemini.manageuserservice.repository.UserRepository;
import com.capgemini.manageuserservice.service.UserService;

@Component
public class UserServiceImpl implements UserService{
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private UserRepository userRepository;
	
	public UserModel addUserService(UserModel user) {
		User userEntity= userRepository.save(userMapper.mapDtoToEntity(user));
		return userMapper.mapEntityToDto(userEntity);
	}
	
	public UserModel updateUserService(UserModel user) {
		User userEntity =userRepository.findByEmail(user.getEmail());
		userEntity.setEmail(user.getEmail());
		userEntity.setName(user.getName());
		userEntity.setPassword(user.getPassword());
		userEntity.setRole(user.getRole());
		userEntity=userRepository.save(userEntity);
		return userMapper.mapEntityToDto(userEntity);
	}
	
	public String deleteUserService(String email) {
		try {
			userRepository.deleteById(email);
			return "Successfully deleted";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "can't delete";
	}

}
