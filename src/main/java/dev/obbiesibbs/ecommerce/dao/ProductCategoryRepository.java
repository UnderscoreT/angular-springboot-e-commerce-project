package dev.obbiesibbs.ecommerce.dao;

import dev.obbiesibbs.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel ="productCategory",//name of json entry
path = "product-category") //path /product-category
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
