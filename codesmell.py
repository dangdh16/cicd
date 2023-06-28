import os
import random

class ExampleClass:
    def __init__(self):
        self.example_variable = 0
        self.example_list = []

    def set_example_variable(self, example_variable):
        self.example_variable = example_variable

    def get_example_variable(self):
        return self.example_variable

    def add_example_to_list(self, example_string):
        self.example_list.append(example_string)

    def get_example_list(self):
        return self.example_list

def main():
    example_object = ExampleClass()

    # This loop is an example of a code smell - long method
    for i in range(100):
        example_object.set_example_variable(i)
        if i % 2 == 0:
            example_object.add_example_to_list("even")
        else:
            example_object.add_example_to_list("odd")

    # This block is an example of a code smell - duplicate code
    for i in range(example_object.get_example_variable()):
        if i % 2 == 0:
            example_object.add_example_to_list("even")
        else:
            example_object.add_example_to_list("odd")

    # This block is an example of a code smell - large class
    class LargeClass:
        def __init__(self):
            self.large_list = [random.randint(1, 10) for _ in range(10000)]
            self.large_dict = {i: random.randint(1, 10) for i in range(10000)}

    # This block is an example of a code smell - unused variables
    unused_variable = "This variable is never used."

    # This block is an example of a code smell - inconsistent formatting
    def example_function():
    print("This function has inconsistent formatting.")

    # This block is an example of a bug - division by zero
    a = 5
    b = 0
    c = a / b

    # This block is an example of a bug - unhandled exception
    try:
        os.remove("nonexistent_file.txt")
    except:
        print("An error occurred while trying to remove a nonexistent file.")

if __name__ == "__main__":
    main()
