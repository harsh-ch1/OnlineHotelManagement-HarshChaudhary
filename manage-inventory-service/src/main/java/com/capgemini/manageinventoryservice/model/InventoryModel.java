package com.capgemini.manageinventoryservice.model;

public class InventoryModel {
	
	private String item_Name;
	private int item_Quantity;
	
	
	
	public InventoryModel() {
		super();
	}
	
	
	
	public InventoryModel(String item_Name, int item_Quantity) {
		super();
		this.item_Name = item_Name;
		this.item_Quantity = item_Quantity;
	}



	public String getItem_Name() {
		return item_Name;
	}
	public void setItem_Name(String item_Name) {
		this.item_Name = item_Name;
	}
	public int getItem_Quantity() {
		return item_Quantity;
	}
	public void setItem_Quantity(int item_Quantity) {
		this.item_Quantity = item_Quantity;
	}



}
