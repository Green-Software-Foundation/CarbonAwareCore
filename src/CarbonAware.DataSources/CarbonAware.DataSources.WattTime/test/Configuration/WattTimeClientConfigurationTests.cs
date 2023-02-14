using CarbonAware.DataSources.WattTime.Configuration;
using CarbonAware.Exceptions;
using NUnit.Framework;

namespace CarbonAware.DataSources.WattTime.Tests;

[TestFixture]
public class WattTimeClientConfigurationTests
{
    [TestCase("testuser", "12345", "http://example.com", TestName = "Validate does not throw: username; password; url")]
    [TestCase("üsername", "password$1£", "http://example.com", TestName = "Validate does not throw; non-ASCII username; non-ASCII password; url")]
    public void Validate_DoesNotThrow(string? username, string? password, string? url)
    {
        // Arrange
        var config = new WattTimeClientConfiguration();
        if (username != null)
            config.Username = username;
        if (password != null)
            config.Password = password;
        if (url != null)
            config.BaseUrl = url;

        // Act & Assert
        Assert.DoesNotThrow(() => config.Validate());
    }

    [TestCase("testuser", "12345", "not a url", TestName = "Validate throws: username; password; bad url")]
    [TestCase(null, "12345", "http://example.com", TestName = "Validate throws: no username; password; url")]
    [TestCase("testuser", null, "http://example.com", TestName = "Validate throws: no username; password; url")]
    [TestCase(null, "password", "http://example.com", TestName = "Validate throws: username; no password; url")]

    public void Validate_Throws(string? username, string? password, string? url)
    {
        // Arrange
        var config = new WattTimeClientConfiguration();
        if (username != null)
            config.Username = username;
        if (password != null)
            config.Password = password;
        if (url != null)
            config.BaseUrl = url;

        // Act & Assert
        Assert.Throws<ConfigurationException>(() => config.Validate());
    }

    // Needs to be separate test because passing TextCase arguments messes up UTF8 string.
    [Test]
    public void Validate_ThrowsForNonUtf8()
    {
        // Arrange
        string nonUtf8 = "\ud800";
        var nonUtf8Username_Config = new WattTimeClientConfiguration() { Username = nonUtf8, Password = "password", BaseUrl = "http://example.com" };
        var nonUtf8Password_Config = new WattTimeClientConfiguration() { Username = "username", Password = nonUtf8, BaseUrl = "http://example.com" };

        // Act & Assert
        Assert.Throws<ConfigurationException>(() => nonUtf8Username_Config.Validate());
        Assert.Throws<ConfigurationException>(() => nonUtf8Password_Config.Validate());
    }
}