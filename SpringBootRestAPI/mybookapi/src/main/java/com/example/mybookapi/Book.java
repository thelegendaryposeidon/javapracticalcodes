package com.example.mybookapi;

public class Book {
    private long id;
    private String title;
    private String author;

    public Book(long id, String title, String author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    // Getters are needed for Spring to convert this to JSON
    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }
}