package com.qvl.springbootweb.Controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

import com.qvl.springbootweb.model.po.Ship;
import com.qvl.springbootweb.model.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // CSR
@RequestMapping("/data")
public class DataController {

    // 取得今日時間
    @GetMapping("/today")
    public ResponseEntity<ApiResponse<String>> today() {
        Date today = new Date();
//        E是星期幾
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss E");
        String todayString = sdf.format(today);
        ApiResponse<String> apiResponse = new ApiResponse<>(true, "成功", todayString);
        return ResponseEntity.ok(apiResponse);
    }

    // 取得樂透幸運數字
    @GetMapping("/lotto")
    public ResponseEntity<ApiResponse<Integer>> lotto() {
        Integer data = new Random().nextInt(100);
        ApiResponse<Integer> apiResponse = new ApiResponse<Integer>(true, "成功", data);
        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping("/ship")
    public ResponseEntity<ApiResponse<Ship>> getShip() {
        Ship ship = new Ship("Titanic", "郵輪", 280, 30);
        ApiResponse<Ship> apiResponse = new ApiResponse<>(true, "成功", ship);
        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping("/ships")
    public ResponseEntity<ApiResponse<List<Ship>>> getShips() {
        List<Ship> ships = List.of(
                new Ship("Titanic", "郵輪", 280, 30),
                new Ship("Evergreen", "貨輪", 350, 30),
                new Ship("順風一號", "客船", 30, 10)
        );
        ApiResponse<List<Ship>> apiResponse = new ApiResponse<>(true, "成功", ships);
        return ResponseEntity.ok(apiResponse);
    }
}
