const discussionFixture = 'merge_requests/diff_discussion.json';

  const diffDiscussionMock = getJSONFixture(discussionFixture)[0];
        props.diffFile.renamed_file = true;
        expect(filePaths()[0]).toHaveText(props.diffFile.old_path);
        expect(filePaths()[1]).toHaveText(props.diffFile.new_path);
      expect(button.dataset.clipboardText).toBe(
        '{"text":"files/ruby/popen.rb","gfm":"`files/ruby/popen.rb`"}',
      );
        props.diffFile.mode_changed = true;
        props.diffFile.mode_changed = false;