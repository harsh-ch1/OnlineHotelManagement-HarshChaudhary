package com.capgemini.manageuserservice;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.capgemini.manageuserservice.entity.User;
import com.capgemini.manageuserservice.repository.UserRepository;

@SpringBootTest
class ManageUserServiceApplicationTests {

	@Autowired
	UserRepository repo;

	@Test
	public void addTest() {
		User user = new User();
		user.setUsername("h@capegemini.com");
		user.setName("harsh");
		user.setPassword("H@123");
		user.setRole("ROLE_OWNER");
		repo.save(user);
		assertNotNull(repo.findByUsername("h@capegemini.com"));

	}

	@Test
	public void updateTest() {
		User user = repo.findByUsername("h@capegemini.com");
		user.setRole("ROLE_MANAGER");
		repo.save(user);
		assertNotEquals("OWNER", repo.findByUsername("h@capegemini.com").getRole());
	}

	@Test
	public void viewTest() {
		assertEquals("ROLE_OWNER", repo.getUserByUsername("h@capegemini.com").getName());
	}

	@Test
	public void deleteTest() {
		repo.deleteById("h@capegemini.com");
		assertThat(repo.existsById("h@capegemini.com")).isFalse();

	}
}