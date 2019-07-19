---
meta:
  - name: description
    content: PHP的PSR是关于PHP编程与通用的一些核心功能模块的若干规范, 它尝试为PHP中的编程概念提供标准化的解决方案. yue.dev 提供对这些建议的文档, 重点解读和使用分析
  - name: keywords
    content: php psr规范 建议书 解读 分析
---

# PSR - PHP标准建议书 规范 解读 分析
为什么了解并学习PSR? 它提供了一个参考，就像设计模式一样，让我们可以去体会大神们的思路，从而写出优雅且具有通用性的代码。

- `摘自维基百科`
- `PHP标准建议书(PSR)` 是由PHP Framework Interop Group发布的关于PHP编程与通用的一些核心功能模块的若干规范, 它尝试为PHP中的编程概念提供标准化的解决方案, 但并不是强制的.
- `PSR`目的是实现组件之间的互操作性，并为实现最佳编程和测试实践的成熟概念提供通用技术基础. 由于不同开发者所撰写的各种PHP程序库或组件，由于设计思路各有千秋，很多情况下，使用这些库的开发人员，调用不同库的功能时，会非常的麻烦，需要做很多的转换或者适配的工作。为了解决这个痛点，在几个php框架的作者的倡导下，产生了`PSR`
- 每个`PSR`都是由成员建议的，并根据既定的协议进行表决，以便最大程度的保持接口的一致性和延续性

## PSR标准摘要
以下只列出被表决后接受的现行标准建议
### PSR-1
- 名称: 最基本的PHP代码编写标准建议
- 说明: 它包含了应该被认为是确保共享PHP代码之间高水平技术互操作性所需的标准编码元素
- `英文原文` It comprises what should be considered the standard coding elements that are required to ensure a high level of technical interoperability between shared PHP code
- [官网链接](https://www.php-fig.org/psr/psr-1)

### PSR-2
- 名称: PHP代码风格建议
- 说明: 它参考了`PSR-1`，旨在减少不同程序员的代码之间的风格差异。它通过枚举一组共享规则和对如何格式化PHP代码的期望来实现
- `英文原文` It considers PSR-1 and it is intended to reduce cognitive friction when scanning code from different authors. It does so by enumerating a shared set of rules and expectations about how to format PHP code
- [官网链接](https://www.php-fig.org/psr/psr-2)

### PSR-3
- 名称: PHP日志输出建议
- 说明: 针对日志类的工具库，定义了通用的接口
- `英文原文` It describes a common interface for logging libraries
- [官网链接](https://www.php-fig.org/psr/psr-3)

### [PSR-4](./psr-4/)
- 名称: PHP文件自动加载机制的建议
- 说明: 它建议了如何根据PHP文件路径进行自动加载类的规范。本建议具备完全的可操作性，除了PSR-0，任何其他自动加载规范外都可以使用它。 此PSR还描述了根据规范，如何组织目录结构，以便自动加载文件的方法。
- `英文原文` It describes a specification for autoloading classes from file paths. It is fully interoperable, and can be used in addition to any other autoloading specification, including PSR-0. This PSR also describes where to place files that will be auto loaded according to the specification
- [官网链接](https://www.php-fig.org/psr/psr-4) | [中文建议书](./psr-4/标准建议书.md) | [建议书解读与应用](./psr-4/标准建议书解读.md)

### PSR-5 (依然是草案阶段)
- 名称: PHPDoc的撰写标准建议
- 说明: 此PSR的主要目的是提供PHPDoc标准的完整和正式定义。 这个PSR与其前身，phpDocumentor 1.x相关PHPDoc标准不同，本建议可以为PHP语言中的新功能提供支持，并解决其前身的一些缺点。
- `英文原文` It describes a specification for autoloading classes from file paths. It is fully interoperable, and can be used in addition to any other autoloading specification, including PSR-0. This PSR also describes where to place files that will be auto loaded according to the specification>
- [官网链接](https://www.php-fig.org/psr/psr-5)

### PSR-6
- 名称: 缓存库的标准建议
- 说明: 此PSR的目标是允许开发人员创建可以集成到现有框架和系统中的缓存库，而无需自定义开发
- `英文原文` The goal of this PSR is to allow developers to create cache-aware libraries that can be integrated into existing frameworks and systems without the need for custom development
- [官网链接](https://www.php-fig.org/psr/psr-6)

### [PSR-7](./psr-7/)
- 名称: HTTP消息接口建议
- 说明: 它描述了用于表示HTTP消息的通用接口，如RFC 7230和RFC 7231中所述，以及用于HTTP消息的URI，如RFC 3986中所述
- `英文原文` It describes common interfaces for representing HTTP messages as described in RFC 7230 and RFC 7231, and URIs for use with HTTP messages as described in RFC 3986
- [官网链接](https://www.php-fig.org/psr/psr-7) | [中文建议书](./psr-7/标准建议书.md) | [建议书解读与应用](./psr-7/标准建议书解读.md)

### PSR-11
- 名称: 依赖注入容器的通用接口建议
- 说明: 它描述了依赖注入容器的通用接口。 目标是为任何框架和库在利用容器来获取对象实例和参数时，有一套标准化的接口
- `英文原文` It describes a common interface for dependency injection containers. The goal is to standardize how frameworks and libraries make use of a container to obtain objects and parameters (called entries in the rest of this document)
- [官网链接](https://github.com/container-interop/fig-standards/blob/master/proposed/container.md)

### PSR-12 (依然是草案阶段)
- 名称: PHP代码编写风格的扩展版建议（草案）
- 说明: 它继承并扩展了`PSR-2`，对编码风格提供更加完善的建议
- `英文原文` It extends, expands and replaces PSR-2, the coding style guide and requires adherence to PSR-1, the basic coding standard
- [官网链接](https://github.com/php-fig/fig-standards/blob/master/proposed/extended-coding-style-guide.md)

### PSR-13
- 名称: 超链接的建议
- 说明: 它描述了用于生成超链接的PHP的类应该实现的接口
- `英文原文` It describes common interfaces for representing a hypermedia link
- [官网链接](https://www.php-fig.org/psr/psr-13)

### PSR-14
- 名称: 事件管理器类的建议
- 说明: 它描述了针对事件的转发/处理是的标准接口
- `英文原文` It describes common interfaces for dispatching and handling events
- [官网链接](https://www.php-fig.org/psr/psr-14)

### [PSR-15](./psr-15/)
- 名称: HTTP服务器的请求对象处理的建议
- 说明: 它描述了针对 http请求的处理以及处理期间使用的中间件组件的标准接口
- `英文原文` It describes common interfaces for HTTP server request handlers and HTTP server middleware components that use HTTP messages
- [官网链接](https://www.php-fig.org/psr/psr-15) | [中文建议书](./psr-15/标准建议书.md) | [建议书解读与应用](./psr-15/标准建议书解读.md)

### PSR-16
- 名称: 简单的缓存库的建议
- 说明: 它描述了针对 简单但是具备扩展性的缓存库与缓存驱动库 的标准接口
- `英文原文` It describes a simple yet extensible interface for a cache item and a cache driver
- [官网链接](https://www.php-fig.org/psr/psr-16)

### PSR-17
- 名称: HTTP相关的工厂对象的建议
- 说明: 它描述了 用于创建和`PSR-7`兼容的http对象的工厂类 的标准接口
- `英文原文` It describes a common standard for factories that create PSR-7 compliant HTTP objects
- [官网链接](https://www.php-fig.org/psr/psr-17)

### PSR-18
- 名称: HTTP相关的工厂对象的建议
- 说明: 它描述了一套的标准接口，用来实现发送http请求与接收http响应的类
- `英文原文` It describes a common interface for sending HTTP requests and receiving HTTP responses.
- [官网链接](https://www.php-fig.org/psr/psr-18)

### PSR-19（草案）
- 名称: PHPDoc文档标签的建议（草案）
- 说明: 它描述了一组完整的用于PHPDoc的标签
- `英文原文` It provides a complete catalog of tags in the PHPDoc standard.
- [官网链接](https://github.com/php-fig/fig-standards/blob/master/proposed/phpdoc-tags.md)