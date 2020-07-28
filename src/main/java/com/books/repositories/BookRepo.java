package com.books.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepo extends CrudRepository<com.books.entities.Book, Integer> {
    public com.books.entities.Book findById(int id);
}
