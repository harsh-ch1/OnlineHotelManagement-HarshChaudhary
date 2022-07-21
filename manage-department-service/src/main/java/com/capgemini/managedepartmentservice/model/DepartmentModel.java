package com.capgemini.managedepartmentservice.model;



public class DepartmentModel {
	
	private String department_Name;
	private String head_Of_Department_Name;
	private int head_Of_Department_PhoneNo;
	private int size_of_Department;
	
	
	
	public DepartmentModel() {
		super();
	}
	
	public DepartmentModel(String department_Name, String head_Of_Department_Name, int head_Of_Department_PhoneNo,
			int size_of_Department) {
		super();
		this.department_Name = department_Name;
		this.head_Of_Department_Name = head_Of_Department_Name;
		this.head_Of_Department_PhoneNo = head_Of_Department_PhoneNo;
		this.size_of_Department = size_of_Department;
	}
	
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
