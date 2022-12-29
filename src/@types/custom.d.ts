interface RequestInit {
  method?: 'PUT' | 'PATCH' | 'DELETE' | 'POST' | 'GET';
}

interface ObjectConstructor {
  keys<T extends object>(o: T): (keyof T)[];
}
