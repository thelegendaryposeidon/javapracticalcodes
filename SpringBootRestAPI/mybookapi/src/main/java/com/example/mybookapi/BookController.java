package com.example.mybookapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookController {

    @GetMapping("/books")
    public List<Book> getAllBooks() {
       
        return List.of(
            new Book(1, "1984", "George Orwell"),
            new Book(2, "Dune", "Frank Herbert"),
            new Book(3, "The Catcher in the Rye", "J.D. Salinger")
        );
    }
}