package com.capgemini.retrievereportservice.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

import com.capgemini.retrievereportservice.entity.StaffPayment;

@Repository
@EnableMongoRepositories
public interface StaffRepository extends MongoRepository<StaffPayment,Integer> {
	public List<StaffPayment> findAll();
	
	@SuppressWarnings("unchecked")
	public StaffPayment save(StaffPayment staff);
	
	//public void deleteById(int id);
	
	//public StaffPayment findById(int id);
}
