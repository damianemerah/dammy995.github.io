# def max_identical_sum(m, n):
#     # Create a list to store the sum of digits
#     sum_list = [0]*20

#     # Iterate through the range from m to n (inclusive)
#     for i in range(m, n+1):
#         # Convert the integer to a string, then to a list of integers
#         digits = list(map(int, str(i)))
#         # Sum the digits and increment the corresponding index in sum_list
#         sum_list[sum(digits)] += 1
#         print(sum_list)

#     # Return the maximum value in sum_list
#     return max(sum_list)
def max_identical_sum(min_num, max_num):
    # Initialize a frequency counter
    freq_counter = [0] * 1000

    # Iterate through all numbers from min to max
    for num in range(min_num, max_num + 1):
        # Calculate the sum of digits
        sum_of_digits = sum(int(digit) for digit in str(num))
        # Increment the count for this sum in the frequency counter
        freq_counter[sum_of_digits] += 1

    # Find and return the maximum count in the frequency counter
    return max(freq_counter)


print(max_identical_sum(5, 15))

str1 = """Ever since I was young, I have been captivated by computers and driven by a desire to understand how they work. This curiosity led me to embark on my programming journey after my secondary education when I joined a Python tutorial group on WhatsApp. The unique challenge of writing applications on my phone, such as a CGPA calculator, was a proud moment for me. It was a tangible manifestation of my dreams turning into reality and mastering what I had always yearned for, even in the face of resource constraints. This experience not only reinforced my confidence but also fuelled my passion for computer science, setting me on the path toward pursuing advanced studies in this field. It is with this background and motivation that I am writing to express my strong interest in the Master’s program in Computer Science at Michigan Technological University.
With a background in Industrial Mathematics and Statistics, with a major in Mathematics, I am eager further to develop my skills and knowledge in Computer Science. My specific interest lies in Machine Learning for Social Good, stemming from my deep-rooted desire to contribute to Nigeria. I believe that my country has enormous potential that can be harnessed through the application of machine learning methods to address various social issues and challenges, such as poverty and education. While my primary interest lies in machine learning, I am also intrigued by other research areas such as Software Engineering and the Internet of Things. I am particularly drawn to the role of Software Engineers in creating applications and solutions that address human challenges, especially in developing nations like Nigeria.

In Nigeria, over 100 million people are living in multidimensional poverty, with a significant proportion residing in the northern part of the country. This region has been particularly affected by the activities of Boko Haram and bandits, who have targeted teachers and schools, destroyed more than 910 schools between 2009 and 2015, and forced at least 1,500 to close. The abduction of students and the destruction of school property by these groups have severely reduced the availability of and access to education for many children. Despite these challenges, I believe that with adequate planning, resources, and technological intervention, we can harness the power of education to reduce poverty. My goal is to use machine learning to develop solutions that improve access to quality education, thereby reducing poverty and unleashing the enormous potential of my fellow Nigerians.
I firmly believe that pursuing a Master’s degree in Computer Science at Michigan Tech will equip me with the necessary knowledge, skills, and tools to make a meaningful impact. Machine learning, in particular, has captured my interest due to its potential to revolutionize various industries and drive significant advancements in artificial intelligence. By exploring this field, I aim to contribute to developing intelligent systems"""

print(len(str1))
