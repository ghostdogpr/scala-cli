package scala.cli.integration

import com.eed3si9n.expecty.Expecty.expect

import scala.cli.integration.VersionTests.variants

class VersionTests extends ScalaCliSuite {
  test("version command") {
    // tests if the format is correct instead of comparing to a version passed via Constants
    // in order to catch errors in Mill configuration, too
    val versionRegex = ".*\\d+[.]\\d+[.]\\d+.*".r
    for (versionOption <- variants) {
      val version = os.proc(TestUtil.cli, versionOption).call(check = false)
      assert(
        versionRegex.findFirstMatchIn(version.out.text()).isDefined,
        clues(version.exitCode, version.out.text(), version.err.text())
      )
      expect(version.exitCode == 0)
    }
  }

}

object VersionTests {
  val variants = Seq("version", "-version", "--version")
}
