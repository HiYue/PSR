# PSR
- `摘自维基百科`
- **PHP标准建议书(PSR)**是由PHP Framework Interop Group发布的关于PHP编程语言的若干规范, 它尝试为PHP中的编程概念提供标准化的解决方案, 但并不是强制的.
- `PSR`目的是实现组件之间的互操作性，并为实现最佳编程和测试实践的成熟概念提供通用技术基础. 由于不同开发者所撰写的各种PHP程序库或组件，由于设计思路各有千秋，很多情况下，使用这些库的开发人员，调用不同库的功能时，会非常的麻烦，需要做很多的转换或者适配的工作。为了解决这个痛点，在几个php框架的作者的倡导下，产生了`PSR`
- 每个`PSR`都是由成员建议的，并根据既定的协议进行表决，以便最大程度的保持接口的一致性和延续性

# PSR标准摘要
以下只列出被表决后接受的现行标准建议
### PSR-1
- 名称: 最基本的PHP代码编写标准建议
- 说明: 它包含了应该被认为是确保共享PHP代码之间高水平技术互操作性所需的标准编码元素
- `英文原文` It comprises what should be considered the standard coding elements that are required to ensure a high level of technical interoperability between shared PHP code
- <a target="_blank" href="https://www.php-fig.org/psr/psr-1/">官网链接</a>

### PSR-2
- 名称: PHP代码风格建议
- 说明: 它参考了`PSR-1`，旨在减少不同程序员的代码之间的风格差异。它通过枚举一组共享规则和对如何格式化PHP代码的期望来实现
- `英文原文` It considers PSR-1 and it is intended to reduce cognitive friction when scanning code from different authors. It does so by enumerating a shared set of rules and expectations about how to format PHP code
- <a target="_blank" href="https://www.php-fig.org/psr/psr-2/">官网链接</a>

### PSR-3
- 名称: PHP日志输出建议
- 说明: 针对日志类的工具库，定义了通用的接口
- `英文原文` It describes a common interface for logging libraries
- <a target="_blank" href="https://www.php-fig.org/psr/psr-3/">官网链接</a>

### PSR-4
- 名称: PHP文件自动加载机制的建议
- 说明: 它建议了如何根据PHP文件路径进行自动加载类的规范。本建议具备完全的可操作性，除了PSR-0，任何其他自动加载规范外都可以使用它。 此PSR还描述了根据规范，如何组织目录结构，以便自动加载文件的方法。
- `英文原文` It describes a specification for autoloading classes from file paths. It is fully interoperable, and can be used in addition to any other autoloading specification, including PSR-0. This PSR also describes where to place files that will be auto loaded according to the specification
- <a target="_blank" href="https://www.php-fig.org/psr/psr-4/">官网链接</a>