package dev.obbiesibbs.ecommerce.dao;

import dev.obbiesibbs.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product,Long> {
}
