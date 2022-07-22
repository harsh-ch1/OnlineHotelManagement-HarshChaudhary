package com.capgemini.manageuserservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.capgemini.manageuserservice.entity.User;

@Repository
@EnableJpaRepositories
public interface UserRepository extends JpaRepository<User, String>{
	
public List<User> findAll();
	
	@SuppressWarnings("unchecked")
	public User save(User user);
	
	public void deleteById(String email);
	
	public User findByEmail(String email);

}
