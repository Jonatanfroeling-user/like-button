<?php

namespace Jonatan\Like\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Statamic\Facades\Entry;

class LikeController extends Controller {

    public function store(Request $req){
        
        // find session if and likes
        //$entryId=$req->entry_id;
        $data=$req->validate([
            'like_id' => 'required',
        ]);
        $entryId = $data['like_id'];
        //$likeStatus=$req->like_status;
        $entry = Entry::find($entryId);
        $amtLikes = $entry->likes ?? 0;

        // validate state of like
        $sessionName = "liked".$entryId;
        $likeStatus = Session::get($sessionName) ?? False;
        if(!$likeStatus) Session::put($sessionName, True);
        else Session::put($sessionName, False);


        if($likeStatus=='0') $amtLikes++;
        else $amtLikes--;

        $entry->set('likes', $amtLikes);
        $entry->save();

        //return redirect()->back();
    }
}
