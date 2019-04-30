package com.company.store.controllers;

import com.company.store.models.Product;
import com.company.store.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/products/{id}", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> fetchProductById(@PathVariable(name = "id") int productId) {
        Product product = productService.fetchProductById(productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @RequestMapping(value = "/trending_products/{amount}", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> fetchTrendingProducts(@PathVariable(name = "amount") int amount) {
        ArrayList<Product> products = productService.fetchTrendingProducts(amount);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
