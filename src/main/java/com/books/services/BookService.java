package com.books.services;
import com.books.entities.Book;
import com.books.repositories.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BookService {

    @Autowired
    private BookRepo bookRepo;

    public List<Book> getAllBooks()
    {
        return (List<Book>) bookRepo.findAll();
    }
    public Book getOneBook(int id) {
        return bookRepo.findById(id);
    }
    public Book createBook(Book book) {
        return bookRepo.save(book);
    }
    public void deleteBool(int id) {
        bookRepo.deleteById(id);
    }
}
