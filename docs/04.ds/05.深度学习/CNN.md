---
title: CNN
date: 2023-06-02 13:15:48
permalink: /pages/e7bc1e/
categories:
  - ds
  - 深度学习
tags:
  - 
---
## CNN 
卷积神经网络（Convolutional Neural Networks）

1. _平移不变性_（translation invariance）：不管检测对象出现在图像中的哪个位置，神经网络的前面几层应该对相同的图像区域具有相似的反应，即为“平移不变性”。
    
2. _局部性_（locality）：神经网络的前面几层应该只探索输入图像中的局部区域，而不过度在意图像中相隔较远区域的关系，这就是“局部性”原则。最终，可以聚合这些局部特征，以在整个图像级别进行预测。