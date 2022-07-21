package com.capgemini.managedepartmentservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "depatmentDB")
public class Department {
	
	@Id
	@Column
	private String department_Name;
	@Column
	private String head_Of_Department_Name;
	@Column
	private int head_Of_Department_PhoneNo;
	@Column
	private int size_of_Department;
	
	
	public String getDepartment_Name() {
		return department_Name;
	}
	public void setDepartment_Name(String department_Name) {
		this.department_Name = department_Name;
	}
	public String getHead_Of_Department_Name() {
		return head_Of_Department_Name;
	}
	public void setHead_Of_Department_Name(String head_Of_Department_Name) {
		this.head_Of_Department_Name = head_Of_Department_Name;
	}
	public int getHead_Of_Department_PhoneNo() {
		return head_Of_Department_PhoneNo;
	}
	public void setHead_Of_Department_PhoneNo(int head_Of_Department_PhoneNo) {
		this.head_Of_Department_PhoneNo = head_Of_Department_PhoneNo;
	}
	public int getSize_of_Department() {
		return size_of_Department;
	}
	public void setSize_of_Department(int size_of_Department) {
		this.size_of_Department = size_of_Department;
	}
	
	



}
