package com.books.controllers;

import com.books.entities.Book;
import com.books.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/rest/books")
    public List<com.books.entities.Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/rest/books/{id}")
    public Book getOneBook(@PathVariable int id) {
        return bookService.getOneBook(id);
    }
    @PostMapping("/rest/books")
    public Book createBook(@RequestBody Book book) {
        return bookService.createBook(book);
    }

    @DeleteMapping("/rest/books/{id}")
    public void deleteBook(@PathVariable int id) {
        bookService.deleteBool(id);
    }

}

